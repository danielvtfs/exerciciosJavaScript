function recursiva(max) {
    if (max >= 20000) return;
    max++;
    console.log(max);
    recursiva(max);
    
}

recursiva(-10)