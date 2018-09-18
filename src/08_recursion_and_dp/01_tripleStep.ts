/*
Triple Step: A child is running up a staircase with n steps and can hop either 1 step, 2 steps, or 3
steps at a time. Implement a method to count how many possible ways the child can run up the
stairs
*/

function tripleStep(n, cache = { 1: 1, 2: 2, 3: 4 }) {
    if (n <= 0) return 0;
    if (n <= 3) return cache[n];

    if (!cache[n]) {
        cache[n] =
            tripleStep(n - 1, cache) +
            tripleStep(n - 2, cache) +
            tripleStep(n - 3, cache);
    }

    return cache[n];
}

console.log(tripleStep(350));
