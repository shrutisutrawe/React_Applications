import React,{Component} from 'react';
import { SkipNavContent, SkipNavLink } from './skiplink';
class bmr extends Component{
    constructor(){
        super();
        this.state={
            gender:'',
            weight:'',
            age:'',
            heightFeet:'',
            heightInches:'',
            activity:'',
            bmr:'',
            error:'',
            calories:''
        }
    }
    handleGenderChange = (event) => {
        this.setState({gender: event.target.value})
    }
    handleAgeChange = (event) => {
        this.setState({age: event.target.value})
    }
    handleWeightChange = (event) => {
        this.setState({weight: event.target.value})
    }
    handleheightFeetChange = (event) => {
        this.setState({heightFeet: event.target.value})
    }
    handleheightInchesChange = (event) => {
        this.setState({heightInches: event.target.value})
    }
    handleActivityChange = (event) => {
        this.setState({activity: event.target.value})
    }

    calculateBMR(){
        let bmrcalc = '';
        this.setState({bmr:''});
        let age = this.state.age;
        let gender = this.state.gender;
        let heightFeet = this.state.heightFeet;
        let heightInches = this.state.heightInches;
        let weight = this.state.weight;
        if(age === '' && gender === '' && heightFeet === '' && heightInches === '' && weight === ''){
            this.setState({error:'All fields are required !'});
            return;
        }

        if(gender === ''){
            this.setState({error:'Please enter gender !'});
            return;
        }else if(weight === ''){
            this.setState({error:'Please enter weight !'});
            return;
        }else if(heightFeet === ''){
            this.setState({error:'Please enter height in feet !'});
            return;
        }else if(heightInches === ''){
            this.setState({error:'Please enter height in inches !'});
            return;
        }else if(age === ''){
            this.setState({error:'Please enter age !'});
            return;
        }


        let height = ((heightFeet * 30.48) + (heightInches * 2.54));
        if(gender === "2"){
            bmrcalc = Math.round(66 + (6.2 * weight) + (12.7 * height) - (6.76 * age)); 
        }else if(gender === "1"){
            bmrcalc = Math.round(655.1 + (4.35 * weight) + (4.7 * height) - (4.7 * age)); 
        }
        this.setState({bmr:bmrcalc});
        this.setState({error:''});
    }

    calculateCalories(){
        let activity = this.state.activity;
        let bmrCalc = this.state.bmr;
        let caloriescalc ='';
        this.setState({calories:''});

        if(activity === ''){
            this.setState({error:'Please select your workout activity !'});
            return;
        }else if(bmrCalc === ''){
            this.setState({error:'Please Calculate BMR !'});
            return;
        }
        caloriescalc = Math.round(bmrCalc * activity);
        this.setState({calories:caloriescalc});
        this.setState({error:''});
    }

    render(){
        let error;
        if(this.state.error){
            error = <div className="error">{this.state.error}</div>
        }
        let resultBMR;
        if(this.state.bmr){
            resultBMR = <div className="result">{this.state.bmr}</div>
        }
        let resultCalories;
        if(this.state.calories){
            resultCalories = <div className="resultCal">{this.state.calories}</div>
        }
        return (
            <><SkipNavLink id="main-content">
                Skip to main content
            </SkipNavLink>
            <div id="bmrcalc">
                    <div className="form">
                        <h2>BMR &amp; Daily Calorie Calculator</h2>
                        {error}
                        <div className="inputwrap">
                            <label className="label">Gender<mark>*</mark></label>
                            <label><input type="radio" className="genderF" checked={this.state.gender === "1"} onChange={this.handleGenderChange} name="gender" value="1" />Female</label>
                            <label><input type="radio" className="genderM" checked={this.state.gender === "2"} onChange={this.handleGenderChange} name="gender" value="2" />Male</label>
                        </div>
                        <div className="inputwrap">
                            <label className="label">Weight in Pounds<mark>*</mark></label>
                            <input type="number" value={this.state.weight} onChange={this.handleWeightChange} name="weight" className="weight" min="0" max="999" />
                        </div>
                        <div className="inputwrap">
                            <label className="label">Height in feet and inches<mark>*</mark></label>
                            <input type="number" value={this.state.heightFeet} onChange={this.handleheightFeetChange} name="heightFeet" className="heightFeet" min="0" max="8" />
                            <input type="number" value={this.state.heightInches} onChange={this.handleheightInchesChange} name="heightInches" className="heightInches" min="0" max="11" />
                        </div>
                        <div className="inputwrap">
                            <label className="label">Age in years<mark>*</mark></label>
                            <input type="number" value={this.state.age} onChange={this.handleAgeChange} name="age" className="age" min="0" max="120" />
                        </div>
                        <button type="button" onClick={() => this.calculateBMR()}> Calculate BMR</button>
                        {resultBMR}
                        <div className="workout">
                            <div className="inputwrap">
                                <label className="label">Workout in a week<mark>*</mark></label>
                                <select className="activity" value={this.state.activity} onChange={this.handleActivityChange} name="activity">
                                    <option value="">Select your activity</option>
                                    <option value="1.2">Sedentary (very little or no excercise) </option>
                                    <option value="1.375">Lightly Active (1 to 3 days per week) </option>
                                    <option value="1.55">Moderately Active (3 to 5 days per week) </option>
                                    <option value="1.725">Very Active (6 to 7 days per week) </option>
                                    <option value="1.9">Extremely Active (exercise multiple times per day) </option>
                                </select>
                            </div>
                            <button type="button" onClick={() => this.calculateCalories()}>Calculate Calories</button>
                            {resultCalories}
                        </div>
                    </div>
                    <SkipNavContent className="main-content" id="main-content">
                        <h2>How many calories should you eat on average?</h2>
                        <p>
                            The number of calories you should eat per day depends on numerous factors, including your age, sex, height, current weight, activity level, and metabolic health, among several others.

                            When trying to lose weight, it’s important to create a calorie deficit by consuming fewer calories than you normally do or by exercising more. Some people choose to combine the two, eating a little less while being more physically active.
                        </p>

                        <p>Here’s a closer look at how many calories you should eat, based on recommendations from the U.S. Department of Agriculture’s (USDA’s) 2020–2025 Dietary Guidelines for Americans</p>
                        <h3>Women</h3>
                        <table>
                            <thead>
                                <tr>
                                    <th>Age</th>
                                    <th>Daily calorie requirements</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>19–30 years</td>
                                    <td>2,000–2,400 calories</td>
                                </tr>
                                <tr>
                                    <td>31–59 years</td>
                                    <td>1,800–2,200 calories</td>
                                </tr>
                                <tr>
                                    <td>60+ years</td>
                                    <td>1,600–2,000 calories</td>
                                </tr>
                            </tbody>
                        </table>
                        <p>Additionally, these estimates don’t apply to those who are pregnant or breastfeeding, as they’ll need significantly more calories.</p>
                        <h3>Men</h3>
                        <table>
                            <thead>
                                <tr>
                                    <th>Age</th>
                                    <th>Daily calorie requirements</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>19–30 years</td>
                                    <td>2,400–3,000 calories</td>
                                </tr>
                                <tr>
                                    <td>31–59 years</td>
                                    <td>2,200–3,000 calories</td>
                                </tr>
                                <tr>
                                    <td>60+ years</td>
                                    <td>2,000–2,600 calories</td>
                                </tr>
                            </tbody>
                        </table>
                        <p>Men who are very active or have certain health conditions may require more calories. The number you need within these ranges also varies based on your height and weight.</p>
                        <h3>Children</h3>
                        <table>
                            <thead>
                                <tr>
                                    <th>Age</th>
                                    <th>Daily calorie requirements</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>2–4 years</td>
                                    <td><strong>Male:</strong>1,000–1,600 calories<br /><strong>Female:</strong>1,000–1,400 calories</td>
                                </tr>
                                <tr>
                                    <td>5–8 years</td>
                                    <td><strong>Male:</strong>1,200–2,000 calories<br /><strong>Female:</strong>1,200–1,800 calories</td>
                                </tr>
                                <tr>
                                    <td>9–13 years</td>
                                    <td><strong>Male:</strong>1,600–2,600 calories<br /><strong>Female:</strong>1,400–2,200 calories</td>
                                </tr>
                                <tr>
                                    <td>14–18 years</td>
                                    <td><strong>Male:</strong>2,000–3,200 calories<br /><strong>Female:</strong>1,800–2,400 calories</td>
                                </tr>
                            </tbody>
                        </table>
                    </SkipNavContent>
                </div>
                <div className='footer'>
                    <p><small>&copy; 2021 Pexels GmbH</small></p>
                </div></>
            
        )
    }
}
export default bmr;