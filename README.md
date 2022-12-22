# greedygame_analytics
NevinTroy's submission for GreedyGame FrontEnd Internship Task.
  
  The web page was created using react+redux and doesnt use any third party libraries for design or components. 
  
  The redux state is locally stored using session so the state value persists even after refresh. 
  
  The enableVal state is also stored in the url as params so the table can be shared.
  
  There is a cache middleware that stores the data value fetched from the API in the cache and is able to reference the cache layer rather than conducting another FETCH.
  
  The cache feature has some bug and is still in development stages.
