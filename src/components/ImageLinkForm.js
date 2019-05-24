import React from 'react';

const ImageLinkForm = ({onInputChange, onButtonClick}) => {
	return(
		 	<div className="mw7 center pa4 br2-ns ba b--black-10 shadow-5">
   			 	<fieldset className="cf bn ma0 pa0">
      				<legend className="pa0 f5 f4-ns mb3 black-80 b">Paste your image URL and I will detect human faces</legend>
	      			<div className="cf">
		       			 <input 
			       		 	className="f6 f5-l bn fl black-80 bg-white pa3 lh-solid w-100 w-75-m w-80-l br2-ns br--left-ns" 
			       		 	placeholder="Your Image URL" 
			       		 	type="text" 
			       		 	name="formInput"
			       		 	onChange={onInputChange} 
			       		 />
			       		 <button
			       		 	className="f6 f5-l fl pv3 tc bn bg-animate bg-black-70 hover-bg-black white pointer w-100 w-25-m w-20-l br2-ns br--right-ns"
			       		 	type="submit"
			       		 	onClick={onButtonClick}
			       		 >
			       		 Detect
			       		 </button>
		        	
	     	   		</div>
    		</fieldset>
  		</div>
	);
}

export default ImageLinkForm;