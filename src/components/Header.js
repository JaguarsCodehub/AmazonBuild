import Image from 'next/image';
import {
    MenuIcon,
    SearchIcon,
    ShoppingCartIcon,
    LocationMarkerIcon
} from '@heroicons/react/outline'

function Header() {
    return (
        <header>
            {/* Top Nav */}
            <div className="flex items-center bg-amazon_blue p-1 flex-grow py-2">
                <div className="mt-2 flex items-center flex-grow sm:flex-grow-0">
                    <Image 
                        src='https://links.papareact.com/f90'
                        width={150}
                        height={40}
                        objectFit="contain"
                        className="cursor-pointer"
                    />
                </div>

                <div className="hidden sm:flex text-white  items-center text-xs space-x-6 mx-6 whitespace-nowrap">
                    <div className="link">
                        <p className>Hello</p>
                        {/* <LocationMarkerIcon className="h-12 p-4 flex"/> */}
                        <p className="font-bold md:text-sm">Select your address</p>
                    </div>
                </div>

                {/* Search Bar */}
                <div className="hidden sm:flex items-center h-10 rounded-md flex-grow cursor-pointer bg-yellow-400 hover:bg-yellow-500">
                    <input className="p-2 h-full w-6 flex-grow flex-shrink rounded-l-md focus:outline-none" type="text" />
                    <SearchIcon  className="h-12 p-4"/>
                </div>

                {/* Right Section of Header */}
                <div className="text-white flex items-center text-xs space-x-6 mx-6 whitespace-nowrap">
                    <div className=" link">
                        <p>Hello Jitu KT</p>
                        <p className="font-bold md:text-sm">Account & Lists</p>
                    </div>

                    <div className=" link">
                        <p>Returns</p>
                        <p className="font-bold md:text-sm">& Orders</p>
                    </div>
                    
                    <div className="relative link flex items-center">

                        <span className="absolute top-0 right-0 md:right-10 h-4 w-4 bg-yellow-400 text-center rounded-full text-black font-bold">0</span>
                        <ShoppingCartIcon className="h-10"/>
                        <p className="hidden md:inline font-bold md:text-sm mt-2">
                            Basket
                        </p>
                        
                    </div>
                </div>
            </div>

            {/* Bottom Nav */}
            <div className='flex items-center space-x-3 p-2 pl-6 bg-amazon_blue-light text-white text-sm'>
                <MenuIcon className="h-6 mr-1"/>
                <p className="link flex items-center">All</p>
                <p className="link font-semibold">Best Sellers</p>
                <p className="link font-semibold">Mobiles</p>
                <p className="link font-semibold">Amazon Pay</p>
                <p className="link hidden lg:inline-flex font-semibold">Fashion</p>
                <p className="link hidden lg:inline-flex font-semibold">Electronics</p>
                <p className="link hidden lg:inline-flex font-semibold">Prime</p>
                <p className="link hidden lg:inline-flex font-semibold">Customer Service</p>
                <p className="link hidden lg:inline-flex font-semibold">New Releases</p>
                <p className="link hidden lg:inline-flex font-semibold">Health & Personal Care</p>
            </div>
        </header>
    )
}

export default Header
