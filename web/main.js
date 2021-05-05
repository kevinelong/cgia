/** JS niceness **/
log = console.log
get = document.getElementById
body = content => document.body.innerHTML = content
is_array = Array.isArray
SPACE = " "
STRING = "string"
OBJECT = "object"
COMMA_SPACE = ", "
ID = 'id'
CLASS = 'class'
set = (e, k, v) => e.setAttribute(k, v)
fill = (e, v) => e.innerHTML = v
iter = (d, f, a) => d.forEach(e => f.call(e, a))
apply = (s, f, a) => iter(document.querySelectorAll(s), f, a)
is_string = v => typeof v === STRING
cc = (v, s = '') => v.join(s)
surround = (v, q = '"') => cc([q, v, q])
pair = (k, v, s = '=') => cc([k, s, v])
quoted_pair = (k, v, s = '=', q = '"') => cc([k, s, surround(v, q)])
expand = () => 0 //dummy
expand_dict = o => Object.keys(o).map(k => quoted_pair(k, o[k])).join(SPACE)
expand_list = (value, s = COMMA_SPACE) => value.isArray(value) ? value.join(value.map(expand)) : value
expand = value => is_array(value) ? expand_list(value) : typeof value === OBJECT ? expand_dict(value) : value
log(expand({a: 1, b: [123]}))

/** HTML tags **/
bracketed = (value, opening, closing) => `${opening}${value}${closing}`;
angled = value => bracketed(value, '<', '>');
closing_tag = value => bracketed(value, '</', '>');
tag_attributes = a => SPACE + a && a.length > 0 ? expand(a) : ''
tag_base = (name, attributes) => angled(cc([name, tag_attributes(attributes)]));
tag = (tag_name, content, attributes) => tag_base(tag_name, attributes) + closing_tag(name);
div = (content, attributes) => tag('div', content, attributes);
dot = (class_names, content) => tag('div', content, {'class': class_names});
hash = (id, content) => div(content, {'id': id})
body(hash("container", [
    dot("inner", "one"),
    dot("inner", "two"),
    dot("inner", "three"),
]));

/*** point, vector, radian, and degree converters ***/

point = (x, y) => ({x: x, y: y});
vector = (p1, p2) => ({p1: p1, p2: p2});
radians_to_degrees = d => d * 180 / Math.PI;
vector_to_radians = v => Math.atan2(v.p2.y - v.p1.y, v.p2.x - v.p1.x);
vector_to_degrees = v => radians_to_degrees(vector_to_radians(v));

result = vector_to_degrees(vector(point(0, 0), point(1, 1)))
log("result:", result)