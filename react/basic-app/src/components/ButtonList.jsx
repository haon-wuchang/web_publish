import Button from './Buttons.jsx';

export default function ButtonList({list}) {
    return (
        <div>
            {list.map((item) => 
                    <Button name={item.name} type={item.type} /> )}
        </div>
    );
}