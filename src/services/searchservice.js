import request from './requestwrapper'

async function executeQuery(query) {
  return request({
    url: `/acme/rest/${query}`,
    method: 'GET'
  });
}

const SearchService = { executeQuery }
  
export default SearchService;
