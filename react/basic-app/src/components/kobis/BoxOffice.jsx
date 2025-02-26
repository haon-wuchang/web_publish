import './BoxOffice.css';

export default function BoxOffice({rank,title,open,cnt,total,amount,type}) {
    if(type === 'content') {
        cnt = parseInt(cnt).toLocaleString().concat('명');
        total = parseInt(total).toLocaleString().concat('명');
        amount = parseInt(amount).toLocaleString().concat('원');
    }
    
    return(
            <div>
                <p style={{width :50}}>{rank}</p>
                <p style={{width :220}}>{title}</p>
                <p style={{width :100}}>{open}</p>
                <p style={{width :100}}>{cnt}</p>
                <p style={{width :100}}>{total}</p>
                <p style={{width :120}}>{amount}</p>
            </div>
    );
}