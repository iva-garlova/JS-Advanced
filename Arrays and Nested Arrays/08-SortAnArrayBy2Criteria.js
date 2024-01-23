function sort(arr){
     arr.sort((a, b) => {
    
        let lengthComparison = a.length - b.length;
    
        if (a.length == b.length) {
          return a.localeCompare(b) 
        }
    
        return lengthComparison;
      });
    return arr.join('\n');
    }

    


sort(['alpha', 'beta', 'gamma']);
sort(['Isacc', 'Theodor', 'Jack', 'Harrison', 'George']);
sort(['test', 'Deny', 'omen', 'Default']);