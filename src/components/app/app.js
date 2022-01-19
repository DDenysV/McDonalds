import React from 'react';
import menu from '../menu/menu';
import Body from '../body/body';
// import Basked from '../basked/basked';
import nonelike from '../img/like-none.png'
import like from '../img/like.png'


class App extends React.Component {
    state = {
        menu : null,
        basked : [],
        total : 0,
        flag : true,
        modal : []
        }

    componentDidMount() {
        this.setState(()=>{
            return {
                menu : menu
            }
        })
    }

    componentDidUpdate() {
        this.finalprice()
    }

    onAddcount = (event) => {
        let id = event.nativeEvent.path[1].id;
        if(this.state.basked.length > 0){
           this.state.basked.map((element, index)=>{
                return(
                    element.id == id? element.count++: null
                )
            })
        }
        this.setState(()=>{
            return{}
        })
        this.state.flag = true
    }

    onDellcount = (event) => {
        function delpos (element, index, mass){
            if(element.count == 1) {
                mass.splice(index, 1);
            } else {element.count--}
        }
        let id = event.nativeEvent.path[1].id;
        if(this.state.basked.length > 0){
           this.state.basked.map((element, index)=>{
                return(
                    element.id == id? delpos(element, index, this.state.basked): null
                )
            })
        }
        this.setState(()=>{
            return{}
        })
        this.state.flag = true
    }

    onAdd = (event) => {
        let id = event.nativeEvent.path[3].id,
            menu = this.state.menu,
            basked = this.state.basked,
            position = null
            menu.map((element)=>{
                return element.id == id? seacrhinbasked(element) : null
            })
            
            function seacrhinbasked(element){
                if(basked.length > 0) {
                    for(let i = 0; basked.length > 0; i++) {
                        let p = i
                        if(basked[i] && basked[i].id == element.id){
                           return element.count++, position = null
                            
                        } else if(basked.length == p){
                            return position = element, position.count = 1
                            
                        }
                    }
                } else {
                return position = element, position.count = 1   
                }
                    
            }
        
            this.setState((state)=>{
                if(position == null){
                    return {
                        menu : this.state.menu,
                        basked : [...this.state.basked]}
                } return {
                    menu : this.state.menu,
                    basked : [...this.state.basked, position]}
        })
        this.state.flag = true
    }

    finalprice = () => {
        if(this.state.basked.length > 0){
            let basked = this.state.basked,
                total = this.state.total;
                total = 0
                basked.map((element)=>{
                    return(total += (element.price * element.count))
                })
            if(this.state.flag){
                this.state.flag = false
                this.setState(()=>{
                    return{total}
                })
            } 
        } else if(this.state.total !== 0){
            this.state.total = 0
            this.setState(()=>{
                return {total : 0}
            })
        }
    }

    onLike = (event) => {
        debugger
        console.log(event)
        if(event.target.src === nonelike) {
            let id
            if(event.nativeEvent.path[4].id-1 || (event.nativeEvent.path[4].id-1)==0){
                id = event.nativeEvent.path[4].id-1
            } else{id = event.nativeEvent.path[3].id-1}
            this.setState(()=>{
                this.state.menu[id].like = 1
                return {
                }
            })
            event.target.src = like
        } else {
            let id
            if(event.nativeEvent.path[4].id-1 || (event.nativeEvent.path[4].id-1)==0){
                id = event.nativeEvent.path[4].id-1
            } else{id = event.nativeEvent.path[3].id-1}
            this.setState(()=>{
                this.state.menu[id].like = 0
                return {
                }
            })
            event.target.src = nonelike
        }
    }

    onModal = (event) => {
        let id = event.nativeEvent.path[2].id,
            menu = this.state.menu,
            modal = this.state.modal
            menu.map((element)=>{
                return element.id == id? modal = element : null
            })
            modal.counter = 1
            this.setState(()=>{
                return{modal}
            })

        document.querySelector('.modal-card').style.display = 'block'  
    }

    onClosedModal = () => {
        
        this.setState(()=>{
            let modal = this.state.modal
            modal = []
            return{}
        })

        document.querySelector('.modal-card').style.display = 'none'
    }

    onAddModalcount = (event) => {
        let modal = this.state.modal
            modal.counter++;
        this.setState(()=>{
            return{}
        })
    }

    onDelModalcount = () => {
        let modal = this.state.modal
        modal.counter--
        if(modal.counter == 0){
            alert('Я для тебя какая-то шутка?')
            modal.counter = 1
        }

        this.setState(()=>{
            return{}
        })
    }

    onModalBasked = (event) => {
        let id = event.nativeEvent.path[3].id,
        modal = this.state.modal,
        basked = this.state.basked,
        position = null
        seacrhinbasked(modal)
        
        function seacrhinbasked(element){
            if(basked.length > 0) {
                for(let i = 0; basked.length > 0; i++) {
                    let p = i
                    if(basked[i] && basked[i].id == element.id){
                       return element.count += element.counter, position = null
                        
                    } else if(basked.length == p){
                        return position = element, element.count = element.counter
                    }
                }
            } else {
            return position = element, element.count = element.counter
            }
                
        }
    
        this.setState(()=>{
            if(position == null){
                return {
                    menu : this.state.menu,
                    basked : [...this.state.basked]}
            } return {
                menu : this.state.menu,
                basked : [...this.state.basked, position]}
    })
    this.state.flag = true

        document.querySelector('.modal-card').style.display = 'none'
    }

    render() {
        console.log(this.state);
        return (<>
           <Body 
           onClosedModal = {this.onClosedModal}
           onAddModalcount = {this.onAddModalcount}
           onDelModalcount = {this.onDelModalcount}
           onModal = {this.onModal}
           onModalBasked = {this.onModalBasked}
           modal = {this.state.modal}
           onLike = {this.onLike} 
           onAdd = {this.onAdd}
           onAddcount = {this.onAddcount}
           menu = {this.state.menu} 
           basked = {this.state.basked}
           onDellcount = {this.onDellcount}
           total = {this.state.total}
           />
        </>)
    }
}

export default App