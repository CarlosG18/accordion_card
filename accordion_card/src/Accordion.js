import './css/Accordion.css'
import AccordionElement from './AccordionElement';

var titles = [
    'How many team members can I invite?',
    'What is the maximum file upload size?',
    'How do I reset my password?',
    'Can I cancel my subscription?',
    'Do you provide additional support?'
]

var messages = [
    'You can invite up to 2 additional users on the Free plan. There is no limit on team members for the Premium plan',
    'No more than 2GB. All files in your account must fit your allotted storage space.',
    'Click “Forgot password” from the login page or “Change password” from your profile page. A reset link will be emailed to you.',
    'Yes! Send us a message and we’ll process your request no questions asked.',
    'Chat and email support is available 24/7. Phone lines are open during normal business hours.'
]

function Accordion(){
    return (
        <div className="Accordion">
            <div className="Accordion-illustration">

            </div>
            <div className="Accordion-element" >
                <h1>FAQ</h1>
                <AccordionElement title={titles[0]} message={messages[0]}/>
                <AccordionElement title={titles[1]} message={messages[1]}/>
                <AccordionElement title={titles[2]} message={messages[2]}/>
                <AccordionElement title={titles[3]} message={messages[3]}/>
                <AccordionElement title={titles[4]} message={messages[4]}/>
            </div>
        </div>
    );
}

export default Accordion;