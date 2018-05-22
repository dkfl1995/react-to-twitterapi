function receiveTimeline(json){
    return {
        type: 'RECEIVE_TIMELINE',
        json
    };
}

function fetchFailed(bool){
    return {
        type: 'FETCH_FAILED'
    };
}

function fetchSuccess(bool){
    return {
        type: 'FETCH_SUCCESS'
    };
}

export function fetchTimeline(screenName){
    return dispatch => {
        return fetch('/user-timeline', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({
                'user': screenName
            })  
        })
        .then(response => {
            console.log(typeof response);
            console.log(response.status);
            if(response.status === '200'){
                dispatch(fetchSuccess(true));
                
            }
            return response.json();
        })
        .then(
            json => {
                console.log(json.body);
                dispatch(receiveTimeline(json));
            }
        )
        .catch(
            err => {
                console.log('Err: '+err); 
                dispatch(fetchFailed(true));
            }
        );
    };
}