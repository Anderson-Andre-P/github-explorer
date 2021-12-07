import { Counter } from './components/Counter'
import { RepositoryItem } from './components/RepositoryItem'
import { RepositoryList } from './components/RepositoryList'
import './styles/global.scss'

export function App() {
    return (
        <>
            <RepositoryList />
            <Counter />
        </>
    )
}
