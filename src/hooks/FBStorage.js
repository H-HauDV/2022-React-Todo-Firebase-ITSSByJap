
/* ライブラリ */
import { addFirebaseItem, updateFirebaseItem, getFirebaseItems, clearFirebaseItem } from "../lib/firebase";

function FBStorage() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    getItems();
  }, [items]);

  const getItems = async () => {
    const _items = await getFirebaseItems();
    setItems(_items);
  };

  const addItem = async item => {
    const newItem = { text: item.text, done: item.done };
    await addFirebaseItem(newItem);
    setItems([...items, newItem]);
  };
}
export default FBStorage;