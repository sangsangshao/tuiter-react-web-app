function clickMe() {
      alert('thanks for clicking me!')
}

function clickMeToo () {
      alert('thanks for clicking me too!')
}

const todoItems = [
      'Make breakfast',
      'Walk dogs',
      'Make dinner',
      'Take shower',
      'Watch a move',
      'Go to bed'
]

function init() {
      console.log('Hello world from jQuery');
      /* do the rest of the lab work here */

      const bindById = $('#bind-by-id');
      const bindByClass = $('.bind-by-class');
      console.log('Binding to the DOM');
      console.log(bindById);
      console.log(bindByClass);

      const changeStyle = $('#change-style');
      const changeStyle2 = $('.change-style');
      changeStyle.css('color', 'red');
      changeStyle2.css('color', 'blue');

      console.log('Get and set attributes');
      const getIdAttr = $("#get-id-attr");
      const id = getIdAttr.attr('id');
      console.log(id);

      const setClassAttr = $("#set-class-attr");
      setClassAttr.attr('class', 'class-0');

      const addClass1Example = $("#add-class-1");
      addClass1Example.addClass('class-1');

      const removeClass1Example = $("#remove-class-1");
      removeClass1Example.removeClass('class-2');

      const hideMe = $("#hide-me");
      hideMe.hide();

      const showMe = $("#show-me");
      showMe.show();

      const newLineItem = $("<li>Line item 1</li>");
      const anotherLineItem = $("<li>Line item 2</li>");

      const ul = $("#append-new-elements");
      ul.append(newLineItem);
      ul.append(anotherLineItem);

      const removeLi =$("#remove-this");
      const emptyUl = $("#empty-this");
      removeLi.remove();
      emptyUl.empty();

      const changeThisText =
          $("#change-this-text");
      const changeThisHtml =
          $("#change-this-html");
      changeThisText.html('New text');
      changeThisHtml.html(`
   <li>Line item A</li>
   <li>Line item B</li>
   <li>Line item C</li>
`);

      const child2 = $("#child-2");
      const parent1 =
          child2.parents("#parent");
      parent1
      .css('background-color', 'red')
      .css('color', 'white');

      const parent = $("#parent");
      const child = parent.find("#child-2");
      child.css('background-color', 'blue')

      const handleClick =
          () => console.log('Handle click');
      const clickable = $('.clickable');
      clickable.click(handleClick);

      const handleEventTarget = (event) => {
            const target = event.target;
            console.log(target);
            $(target)
            .css('background-color', 'blue')
            .css('color', 'white');
      }
      const eventTarget = $("#event-target");
      eventTarget.click(handleEventTarget);

      let hideBtn, showBtn, hideShowHeader;
      hideBtn = $('#hide');
      showBtn = $('#show');
      hideShowHeader = $('#hide-show');
      const hideHandler = () => {
            hideShowHeader.hide();
      }
      const showHandler = () => {
            hideShowHeader.show();
      }
      hideBtn.click(hideHandler);
      showBtn.click(showHandler);

      // const renderTodos = (todos) => {
      //       const todoList = $('#todo');
      //       todoList.empty();
      //       todos.forEach((item, index) => {
      //             const newTodoItem = $(`
      //                 <li>
      //                 <button id="${index}" class="delete">X</button>
      //                   ${item}
      //                 </li>`)
      //             todoList.append(newTodoItem)
      //       })
      // }
      // renderTodos(todoItems)
      //
      // const addTodo = () => {
      //      const todoText = $('#new-todo').val()
      //       // alert(todoText)
      //       todoItems.push(todoText)
      //       renderTodos(todoItems)
      // }
      //
      // $('#add-todo').click(addTodo)
      // $('#todo').on('click', '.delete', (event) => {
      //       const target = $(event.target)
      //       const index = target.attr('id')
      //       console.log(index)
      //       todoItems.splice(index, 1)
      //       renderTodos(todoItems)
      // } )
      //
      // const hello = document.getElementById("hello")
      // hello.style.color = 'red'
      // hello.innerHTML = 'Hello There How are you?'
      // // const clickMe = document.getElementById('click-me')
      //
      // $('#click-me-too').click(clickMeToo);
      //
      // $('#clickToHide').click(() => {
      //       $('#hideMe').hide()
      // })
      //
      // $('#clickToShow').click(() => {
      //       $('#hideMe').show()
      // })
      //
      // $('#clickToToggle').click(() => {
      //       $('#hideMe').toggle()
      // })
      //
      // $("#hello")
      // .css({'color': 'blue',
      //       'background-color': 'yellow'})
      // .html('Hey, how are you doing?')
      //
      //
      // // const walkDogs = $('<li>Walk dogs</li>')
      // // todoList.append(walkDogs)
      // // const makeDinner = $('<li>Make dinner</li>')
      // // todoList.append(makeDinner)
      // // const makeBreakfast = $('<li>Make breakfast</li>')
      // // todoList.prepend(makeBreakfast)
}
$(init)


