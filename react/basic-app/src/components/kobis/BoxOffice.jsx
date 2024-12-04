
export default function BoxOffice({rank,title,open,cnt,total}) {
    return(
            <tr>
                <th>{rank}</th>
                <th>{title}</th>
                <th>{open}</th>
                <th>{cnt}</th>
                <th>{total}</th>
            </tr>
    );
}