const apiUrl = 'http://localhost:3000';

export function receiveTimeline(json){
    type: 'RECEIVE_TIMELINE',
    json
}

export function fetchFailed(bool){
    type: 'FETCH_FAILED'
}

export function fetchSuccess(bool){
    type: 'FETCH_SUCCESS'
}

export function fetchTimeline(screenName){
    return dispatch => (
        fetch(apiUrl + '/user-timeline', {
            mode: 'no-cors',
            method: 'POST',
            body: screenName
        })
            .then(response => {
                let res;
                if(!response){
                    console.log('Something go wrong'); 
                    // dispatch(fetchFailed(true))
                }else {
                    res = response.json;
                }
                console.log("nice fetch", response);
                return res;
            })
            .then(
                (json) => {
                    
                    // dispatch(fetchSuccess(true));
                    dispatch(receiveTimeline(json));
                }
            )
            .catch(
                err => console.log(err)
            )
    );
}