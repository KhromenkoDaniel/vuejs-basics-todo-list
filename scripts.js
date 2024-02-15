const todoApp = {

    data() {
        return {
            toDoList: [],
            newToDoItem: {
                completed: false,
                description: ''
            }
        }
    },
    methods: {
        addToDoTask: function () {
            if (this.newToDoItem.description) {
                this.toDoList.push(this.newToDoItem);
                this.newToDoItem = {
                    completed: false,
                    description: ''
                };
                localStorage.setItem('toDoList', JSON.stringify(this.toDoList));
            } else {
                alert('Please enter a task description');
            }
        },
        clearAllToDoTasks: function () {
            this.toDoList = [];
        },
        setCompletedStatus: function (todo) {
            todo.completed = !todo.completed;
        },
        storeTodoList: function () {
            localStorage.setItem('toDoList', JSON.stringify(this.toDoList));
        }
    },
    created() {
        this.toDoList = localStorage.getItem('toDoList') ? JSON.parse(localStorage.getItem('toDoList')) : this.toDoList;
    },
    updated() {
        localStorage.setItem('toDoList', JSON.stringify(this.toDoList));
    }
};

Vue.createApp(todoApp).mount('#app');
