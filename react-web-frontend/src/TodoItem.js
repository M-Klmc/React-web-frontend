import TodoSetDone from './TodoSetDone.js';
import TodoDelete from './TodoDelete.js';

export default function TodoItem({ item }) {
    return (
        <article className="card">
            <header>
                {item.done &&
                    <h2><del></del><a href="/">{item.title}</a></h2>
                }
                {!item.done &&
                    <h2><a href="/">{item.title}</a></h2>
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