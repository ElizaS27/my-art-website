import {useLocation} from 'react-router-dom';
import Card from '../../components/card/Card';
import {GridContainer, CardContainer} from './User.style'


const User = () => {
    const location = useLocation();
    const user = location.state; 

    const renderProperty = (propName, value) => {
        return (
            <div>
                {propertyName(propName)}:
                {value} 
            </div>
        )
    }

    const propertyName = (name) => {
        const newName = name.replace('_', ' ');
        return newName.slice(0,1).toUpperCase() + newName.slice(1, newName.length)
    }


    return (
        <GridContainer>
            <div>
                {renderProperty('User name', ` ${user.first_name} ${user.last_name}`)}
                {renderProperty('Id', ` ${user.id}`)}
                {renderProperty('Email', ` ${user.email}`)}
                {renderProperty('Phone number', ` ${user.phone_number}`)}
                <h3>Address: </h3>
                {Object.keys(user.address).map(info => {
                    if(info !== 'coordinates'){
                    return renderProperty(`${info}`, ` ${user.address[info]}`) 
                    }
                })}

            </div>
            <CardContainer hover='off'>
                <Card user={user}/>
            </CardContainer>
        </GridContainer>
    )
} 

export default User;