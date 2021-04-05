import AppLayout from '../components/AppLayout'
import Link from 'next/link';



const Home = () => {
    return (
        <AppLayout>
            <Link href="/type"> type</Link>
            <div> Hello, NEXT! </div>
        </AppLayout>
    );
}

export default Home