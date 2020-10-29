import data from '../data/data';


let dummyDataInstance = 0

function filterData(searchTerm){
    searchTerm = searchTerm.toLowerCase()
    const flattenedData = {}
    const keys = Object.keys(data)
    
    if(keys.includes(searchTerm)){
        flattenedData[searchTerm] = data[searchTerm]
        return flattenedData
    }
    keys.map((key) => {
        const matchingResults = data[key].filter((item) => {
            if (item.matching_terms.includes(searchTerm)){
                return item
            }
        })
        return flattenedData[key] = matchingResults;
    })

    return flattenedData
}

function getData(req, res) {
    res.send(filterData(req.params.searchterm))
}

function sendDummyData(searchTerm){
    const shouldUpdate = Math.floor(Math.random() * Math.floor(2))
    let flattendData = {}
    console.log(shouldUpdate ? "Sending updated data" : "No data updated")
    if(shouldUpdate){
        dummyDataInstance++;
        flattendData = filterData(searchTerm)
        flattendData["slack"] = flattendData["slack"] ? 
                                flattendData["slack"].concat({id:dummyDataInstance, channel:"new-channel", message:"dummy new "+searchTerm+" message",timestamp:new Date()})
                                :
                                [{id:dummyDataInstance, channel:"new-channel", message:"dummy new "+searchTerm+" message",timestamp:new Date()}]
    }
    
    return({isUpdated: shouldUpdate ? true: false, updatedData: flattendData})
}

export default { getData, sendDummyData }