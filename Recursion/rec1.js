const arts = {
    jazz: ["Miles Davis", "John Coltrane"],
    rock: {
        classic: ["Bob Seger", "The Eagles"],
        hair: ["Def Leppard", "Poison"],
        alt: {
            classic: ["Pearl Jam", "The Killers"],
            current: ["Arctic Monkeys", "Imagine Dragons", "Twenty One Pilots"]
        }
    }
};

// Example usage
console.log("Current alternative rock bands:");
console.log(arts.rock.alt.current.join(", "));
