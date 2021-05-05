/*** point, vector, radian, and degree converters ***/

point = (x, y) => ({x: x, y: y});
vector = (p1, p2) => ({p1: p1, p2: p2});
radians_to_degrees = d => d * (180 / Math.PI);
vector_to_radians = v => Math.atan2(v.p2.y - v.p1.y, v.p2.x - v.p1.x);
vector_to_degrees = v => radians_to_degrees(vector_to_radians(v));

result = vector_to_radians(vector(point(2, 2), point(1, 1)))
console.log("result:", result)