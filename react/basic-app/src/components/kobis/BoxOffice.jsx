import './BoxOffice.css';

export default function BoxOffice({rank,title,open,cnt,total,amount}) {
    return(
            <div className='boxoffice'>
                <p>{rank}</p>
                <p>{title}</p>
                <p>{open}</p>
                <p>{cnt}</p>
                <p>{total}</p>
                <p>{amount}</p>
            </div>
    );
}