addTodo: (state, action) => {
const todo = {
id: nanoid(),
text: action.payload
}
state.todos.push(todo)
}

# state Kya Hai?

Redux ke andar jo data currently stored hai
Humare Code Mein: { todos: [{id: 1, text: "Hello world"}] }
(shuruati data)
Kaam Kaisa Karta Hai:

1.  state.todos se humari purani todo list milti hai
2.  Isme hum naya todo add karenge

# action Kya Hai?

Ek message jo batata hai ki kya karna hai
Andar Kya Hota Hai:
javascript
{
type: 'todo/addTodo', // Redux khud banata hai
payload: 'Naya todo text' // Jo hum bhejte hain
}

# action.payload Kya Hai?

Woh data jo humne bheja hai
Example:
Jab hum call karte hain: dispatch(addTodo("Doodh lena"))
Toh action.payload ban jata hai "Doodh lena"
Naya todo banta hai: {id: 'random-ID', text: "Doodh lena"}

# state.todos.push(todo)

What it does: Adds a new todo to the existing todos array
Explanation:
state.todos - hamari current todo list
.push(todo) - isme ek naya todo item add karo
todo - jo naya item banaya hai (id + text wala object)

# Special Note:

1. Normally Redux mein hum directly state change nahi karte (immutability rule)
2. But Redux Toolkit ke andar Immer naam ka magic chalta hai
3. Immer hume "mutable" style mein code likhne deta hai,
   lekin internally wo immutable update karta hai
4. Isliye push() use kar sakte hai directly

# state.todos = state.todos.filter((todo) => todo.id !== action.payload)

What it does: Removes a todo by filtering out the one with matching ID
Explanation:

1. state.todos.filter() - ek nayi temporary list banayega
2. todo.id !== action.payload - sirf un todos ko rakhega jinki ID, jo ID humne bheji hai (payload) uske equal nahi hai
3. state.todos = - purani list ko replace kardo nayi filtered list se

# Jab sirf ID ki zaroorat ho, to direct action.payload use karo

# Jab additional data chahiye, to object form me bhejo (action.payload.id)


# callback use hum method ke reference ke liye use krte hai agar hum callback use nhi krenge to wo method/ function Immediately execute ho jayanga.

# UseDispatch ->
1. Reducer ka use karte hua store me changes karte hai.
2. dispatch(
  updateTodo({
    id,           // जिस Todo को अपडेट करना है उसकी ID
    newText: editText  // नया टेक्स्ट
  })
  );
  Store को अपडेट करने के लिए
  Redux store को एक action भेजता है
  updateTodo action creator एक action बनाता है जिसे reducer समझेगा

# useSelector ->
1. useSelector me ek callback ke under state ka access milta hai
2. const todos = useSelector((state) => state.todos)
Redux store से todos डेटा निकालकर लाता है
Store से डेटा पढ़ने के लिए
जब भी store में todos अपडेट होते हैं, कंपोनेंट अपने-आप री-रेंडर हो जाता है