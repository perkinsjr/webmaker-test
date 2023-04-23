import { UserButton } from '@clerk/nextjs/app-beta';
import { auth } from '@clerk/nextjs/app-beta';
import Link from 'next/link';

function Dashboard() {
    const { userId } = auth();

    return (
        <div>
            <div>dashboard</div>
            <div>Id de usuário: {userId}</div>
            <Link href='/dashboard/my-project'>Meu projeto</Link>
            <UserButton afterSignOutUrl='/'/>
            {/*
            <Link href='/profile'>Deslogar</Link>
            */}
        </div>
        
    );
}

export default Dashboard;