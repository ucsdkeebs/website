export function sleep(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
}


export function shuffle(array: any[]) {
    let currentIndex = array.length
    let randomIndex = 0;
  
    // while elements left to shuffle
    while (currentIndex > 0) {
  
      // pick random element and swap with current element
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
  }