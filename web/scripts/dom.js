/** DOM niceness **/


log = console.log;
get = document.getElementById;
body = content => document.body.innerHTML = content;
append = content => document.body.innerHTML += content;
set = (e, k, v) => e.setAttribute(k, v);
fill = (e, v) => e.innerHTML = v;
iter = (d, f, a) => d.forEach(e => f.call(e, a));
apply = (s, f, a) => iter(document.querySelectorAll(s), f, a);
