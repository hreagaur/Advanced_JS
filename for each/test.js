const ids = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const initApp = async () => {
    await useForEach(ids);
    await useTraditionalForLoop(ids);
    await useForOfLoop(ids);
    await useForInLoop(ids);
    await useMapMethod(ids);
}

document.addEventListener('DOMContentLoaded', initApp);

const getPost = async (id) => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    return await response.json();
}

const useForEach = async (ids) => {
    console.log('Using forEach method:');
    await Promise.all(ids.map(async id => {
        const post = await getPost(id);
        console.log(post);
    }));
}

const useTraditionalForLoop = async (ids) => {
    console.log('Using traditional for loop:');
    for (let i = 0; i < ids.length; i++) {
        const post = await getPost(ids[i]);
        console.log(post);
    }
}

const useForOfLoop = async (ids) => {
    console.log('Using for...of loop:');
    for (const id of ids) {
        const post = await getPost(id);
        console.log(post);
    }
}

const useForInLoop = async (ids) => {
    console.log('Using for...in loop:');
    for (const index in ids) {
        const post = await getPost(ids[index]);
        console.log(post);
    }
}

const useMapMethod = async (ids) => {
    console.log('Using map method:');
    await Promise.all(ids.map(async id => {
        const post = await getPost(id);
        console.log(post);
    }));
}
