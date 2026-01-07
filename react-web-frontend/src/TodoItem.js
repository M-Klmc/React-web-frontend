import TodoSetDone from './TodoSetDone.js';
import TodoDelete from './TodoDelete.js';
import { Link } from 'react-router-dom';

export default function TodoItem({ item }) {
    return (
        <article className="card">
            <header>
                {item.done &&
                    <h2><del><Link to={`/${item.id}`}>{item.title}</Link></del></h2>
                }
                {!item.done &&
                    <h2><del><Link to={`/${item.id}`}>{item.title}</Link></del></h2>
                }
            </header>
            <footer>
                {item.desc && <p>{item.desc}</p>}
                <p className="datetime">{new Date(item.createdAt).toLocaleString()}</p>
                <div className='horizontal'>
                    {!item.done && <TodoSetDone itemID={item._id} />}
                    <TodoDelete itemID={item._id} />
                </div>
            </footer>
        </article>
    );
}