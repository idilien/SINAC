import Link from 'next/link'
import React from 'react'
import Layout from '../components/layout'

export default function Pag404 () {
    return (
        <Layout
        title={'Page Not found'}
        >
            <h1 className="error">Página No Encontrada</h1>
            <Link className='error-link'
             href={'/'}>
                Volver
            </Link>
        
        </Layout>
    )
}

