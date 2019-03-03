


const oldsetTimeout = setTimeout;
setTimeout = (callback, timer) => {
   console.log('START'); 
   oldsetTimeout(() => {
      callback();
      console.log('FINISH'); 
   }, timer);
}

//--------------------------


setTimeout(_ => {
  console.log('DONE');
}, 3000);