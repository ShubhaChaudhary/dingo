import { Issuer } from 'openid-client';
import axios from 'axios'

export const fetchdataBenchmarkChart = ()=> async dispatch =>{
    const res = await axios.post('http://localhost:3001/data/dashboard',
            {
                "Site": localStorage.getItem('site'),
                filterData: {},
                Range: [{ "RemoveDate": 2019 }, { "RemoveDate": 2018 }, { "RemoveDate": 2017 }]
            }

        )
        const { data } = res
        dispatch({ type: 'BENCHMARK_DATUM',payload: data})
        // this.setState({ datum: [{ key: "AVG Component hours", values: data[0] }, { key: "AVG Trakka Component Hours", "color": "#f44253", values: data[1] }] })
}
export const fetchdataPerformancechart = ()=> async dispatch =>{
    const res = await axios.post('http://localhost:3001/data/performance',
            {
                "Site": localStorage.getItem('site'),
                filterData: {},
                Range: [{ "RemoveDate": 2019 }, { "RemoveDate": 2018 }, { "RemoveDate": 2017 }]
            }

        )
        const { data } = res
        dispatch({ type: 'PERFORMANCE_DATUM',payload: data})
        // this.setState({ datum: [{ key: "AVG Component hours", values: data[0] }, { key: "AVG Trakka Component Hours", "color": "#f44253", values: data[1] }] })
}


export const fetchFilterData = (site) => async dispatch => {

    const data = { "Site": site }

    const filterData = await axios.post('http://localhost:3001/data/filter', data)
    const datafilter = filterData.data[0];
    console.log(datafilter)
    dispatch({
        type: "FILTER_DATA",
        datafilter
    });
};

export function setYearRange(value) {
    return {
        type: 'YEAR_RANGE',
        value
    }
}

export function login({ username, password }) {
    return function (dispatch) {
        let discovered = null;
        let client = null;
        let access_token = null;
        let token_type = null;


        console.green = function (text) {
            console.log('\x1b[32m%s\x1b[0m', text);
        };

        console.red = function (text) {
            console.log('\x1b[31m%s\x1b[0m', text);
        };

        console.yellow = function (text) {
            console.log('\x1b[33m%s\x1b[0m', text);
        };

        Issuer.defaultHttpOptions = { timeout: 5000 };
        Issuer.discover('https://trakkaacc.dingo.com/ws/Gemini/authService/.well-known/openid-configuration')
            .then(function (result) {
                discovered = result;

                console.green('Discovered issuer:');
                console.log('');
                console.log('discovered: ', discovered);
                console.log('');
                console.log('discovered.issuer: ', discovered.issuer);
                console.log('');
                console.log('discovered.metadata: ', discovered.metadata);
                console.log('**********************************************************************');
            })
            .then(function setupClient() {
                // Create a new auth client using the discovered settings...
                const clientSettings = {
                    client_id: 'performanceAndBenchmarkApp',
                    client_secret: '{8ED66AC7-3b9a-429b-b3d7-EDFE132986EB}',
                    token_endpoint_auth_method: 'client_secret_post'
                }
                client = new discovered.Client(clientSettings);
                console.log('new Client:');
                console.log('');
                console.log('client: ', client);
                console.log('');
                console.log('client.issuer: ', client.issuer);
                console.log('');
                console.log('client.metadata: ', client.metadata);
                console.log('**********************************************************************');
            }).then(function trySuccessfulLogin() {
                // Login with good credentials...
                const loginSettings = {
                    grant_type: 'password',
                    scope: 'email openid profile trakkaApi',
                    username: username,
                    password: password
                }
                client.grant(loginSettings)
                    .then(function (success) {
                        // Should be successful and get here...
                        // What you're looking for is the access_token and token_type
                        access_token = success.access_token;
                        token_type = success.token_type;
                        localStorage.setItem('token', access_token)
                        localStorage.setItem('token_type', token_type)

                        const currentSiteUrl = `https://trakkaacc.dingo.com/ws/Gemini/apiService/api/CurrentSite`
                        axios.defaults.headers.get['Authorization'] = token_type + ' ' + access_token

                        axios.get(currentSiteUrl).then((res) => {
                            const site = res.data.Site
                            localStorage.setItem('site', site)

                            dispatch({
                                type: 'AUTH_USER',
                                payload: {
                                    access_token,
                                    token_type,
                                    site
                                }
                            })

                        })

                    }).catch(error => {
                        dispatch({
                            type: 'AUTH_ERROR',
                            payload: `UserInfo is not valid: ${error}`
                        })
                        // }).then(() => {
                        //     axios.post('http://localhost:3001/data/filter', { "Site": localStorage.getItem('site') }).then((res) => {
                        //         let filterData = res.data
                        //         console.log(filterData)
                        //         localStorage.setItem('filterData', JSON.stringify(filterData))
                        //         dispatch({
                        //             type: 'set_filter',
                        //              filter
                        //         })
                        //     })
                    })


            })

    }
}

export function logout() {
    const token_type = localStorage.getItem('token_type')
    const access_token = localStorage.getItem('token')
    localStorage.removeItem('token_type')
    localStorage.removeItem('token')
    return function (dispatch) {
        const logoutUrl = 'https://trakkaacc.dingo.com/ws/gemini/authservice/logout'
        axios.defaults.headers.get['Authorization'] = token_type + ' ' + access_token
        axios.get(logoutUrl).then(logout => {
            dispatch({
                type: 'AUTH_USER',
                payload: ''

            })
        }).catch(error => {
            dispatch({
                type: 'AUTH_ERROR',
                payload: `UserInfo is not valid: ${error}`
            })
        })
    }
}


