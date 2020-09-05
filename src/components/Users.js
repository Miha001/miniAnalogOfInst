import React,{Component} from 'react';
import InstaService from '../services/instaService';
import User from './User';
import ErrorMessage from './Error';

export default class Posts extends Component{
	InstaService =new InstaService();

	state={
		users:[],
		error:false
	}
	componentDidMount(){
		this.updatePosts();
	}
	 
	updatePosts(){
		this.InstaService.getAllPosts()
		.then(this.onPostsLoaded)
		.catch(this.onError);
	}
	

	onPostsLoaded=(users)=>{
			this.setState({
				users:users,
				error:false
			});
			console.log(this.state.users);

	}

	onError=()=>{
		this.setState({
			error:true
		})
	}

	renderItems(arr){
		return arr.map(item=>{
			const{photo,alt,name}=item;
			return(
                    <User
                src={photo }
                alt={alt}
                name={name}
                />	
			)
		});
	}

	render(){
		const {error,users}=this.state;

		if(error){
			return <ErrorMessage/>
		}
		const items=this.renderItems(users);
		return(
				<div className="left">
					{items}
				</div>
			)
		
	}
}
