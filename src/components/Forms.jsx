import React, {useReducer, useState} from 'react';

const formReducer = (state, event) => {
	return {
	  ...state,
	  [event.title]: event.value
	}
   }

function Forms() {
	const [submitting, setSubmitting] = useState(false);
	const [formData, setFormData] = useReducer(formReducer, {});
	const handleSubmit = event => {
		event.preventDefault();
		setSubmitting(true);

		setTimeout(() => {
		  setSubmitting(false);
		}, 3000)
	  }
	  const handleChange = event => {
		setFormData({
		  title: event.target.title,
		  value: event.target.value,
		});
	  }

	return (
		<div className='wrapper'>
			<h1>Durbans Readme Generator</h1>
			{submitting &&
       <div> Project Title:
	   <ul>
		 {Object.entries(formData).map(([title, value]) => (
		   <li key={title}><strong>{title}</strong>:{value.toString()}</li>
		 ))}
	   </ul></div>
     }
			<form onSubmit={handleSubmit}>
				<fieldset>
					<label>
						<p>Project Title</p>
						<input name="title" onChange={handleChange}/>
					</label>
				</fieldset>
				<fieldset onChange={handleChange}>
					<label>
						<h3>Figlet Font</h3>
	 						<select name="figlet_font" onChange={handleChange}>
								<option value="sBlood">S Blood</option>
								<option value="cyberoMedium">CyberoMedium</option>
								<option value="nipples">Nipples</option>
							</select>
					</label>
					<label>
						<h4>Layer-Height</h4>
						<input type="number" name="layerHeight" onChange={handleChange} />
					</label>
					</fieldset>
				<button type='submit'>Submit</button>
			</form>
		</div>
	);
}

export default Forms();
