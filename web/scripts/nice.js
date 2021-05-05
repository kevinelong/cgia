/** JS niceness **/

EMPTY = ""
SPACE = " "
STRING = "string"
OBJECT = "object"
COMMA_SPACE = ", "
ID = 'id'
CLASS = 'class'

is_array = (a) => Array.isArray(a)
is_string = v => typeof v === STRING
cc = (v, s = '') => v.join(s)
surround = (v, q = '"') => cc([q, v, q])
pair = (k, v, s = '=') => cc([k, s, v])
quoted_pair = (k, v, s = '=', q = '"') => cc([k, s, surround(v, q)])
expand_dict = (o, s = SPACE) => Object.keys(o).map(k => quoted_pair(k, expand(o[k]))).join(s)
expand = value => is_array(value) ? expand_list(value, SPACE) : typeof value === OBJECT ? expand_dict(value, ' ') : value
expand_list = (value, s = SPACE) => is_array(value) ? value.map(expand).join(s) : value
