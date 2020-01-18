import React, {Component} from 'react';
import './App.css';
import {Doughnut} from 'react-chartjs-2';

class App extends Component {
    state = {
        tasks: [
            {
                text: 'Read React Documentation',
                isComplete: true
            },
            {
                text: 'Make First App',
                isComplete: true
            },
            {
                text: 'Make Awesome App',
                isComplete: false
            }
        ],

        task: ''
    };

    completeTask = index => {
        const tasks = [...this.state.tasks];
        tasks[index].isComplete = !tasks[index].isComplete;
        this.setState({tasks})
    };

    addTask() {
        if (this.state.task !== '') {
            const tasks = [...this.state.tasks];
            tasks.push({
                text: this.state.task,
                isComplete: false
            });
            const task = '';
            this.setState({tasks, task})
        }
    };

    setTask = task => {
        this.setState({task})
    };

    removeTask = index => {
        const tasks = [...this.state.tasks];
        tasks.splice(index, 1);
        this.setState({tasks})
    };

    render() {
        const {tasks, task} = this.state;

        return (
            <div>
                <div className="todoes-container row w-75 h-50 mx-auto mt-5 h-500 shadow">
                    <div className="col-5 bg-dark-pink p-5 rounded-left">
                        <div className="m-auto d-block">
                            <h1 className="h3 text-center mb-5">My Tasks</h1>
                            <label>Task:</label>
                            <input
                                value={task}
                                onChange={event => this.setTask(event.target.value)}
                                type="text" className="form-control"/>
                            <button onClick={() => this.addTask()}
                                    className="mt-3 btn btn-outline-light w-100 my-btn shadow mb-5">Add Task
                            </button>
                            <Doughnut
                                data={{
                                    labels: [
                                        'Done',
                                        'ToDo'
                                    ],
                                    datasets: [{
                                        data: [tasks.filter(task => task.isComplete).length, tasks.filter(task => !task.isComplete).length],
                                        backgroundColor: [
                                            '#5ac5ac',
                                            '#eceef0',
                                        ],
                                        hoverBackgroundColor: [
                                            '#5bcbb2',
                                            '#eceef0',
                                        ],
                                        borderWidth: [0, 0],
                                    }],
                                }}
                                options={{
                                    legend: {
                                        labels: {
                                            fontColor: '#ffffff',
                                        }  ,
                                        onClick: (e) => e.stopPropagation()
                                    }
                                }}
                                onElementsClick={this.filterTasks}/>
                        </div>
                    </div>
                    <div className="col-7 bg-light rounded-right font-gray p-5">
                        <h3 className="mb-4">Tasks</h3>
                        {
                            tasks.map((task, index) =>
                                <div key={index} className="card shadow-sm card-task flex-row justify-content-between">
                                    <div>
                                        <label className={task.isComplete ? 'cb-checkbox checked' : 'cb-checkbox'}>
                                            <span className="cb-inner">
                                                <i><input onClick={() => this.completeTask(index)} type="checkbox"/></i>
                                            </span>
                                            {task.text}
                                        </label>
                                    </div>
                                    <div><i onClick={() => this.removeTask(index)} className="fas fa-trash"></i></div>
                                </div>
                            )
                        }
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
