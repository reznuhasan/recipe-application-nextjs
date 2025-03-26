import React from 'react'
import Logo from './logo'
import ListItem from './listItem'

export default function Footer() {
    return (
        <div className="bg-gray-100 py-8">
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-4 gap-8">
                    <div>
                        <Logo />
                        <p className="text-gray-600 mt-2 text-sm">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua.
                        </p>
                    </div>
                    <div>
                        <h4 className="font-semibold mb-4">LWS Kitchen</h4>
                        <ul className="space-y-2">
                            <ListItem path={"/#"} activation={true}>About Us</ListItem>
                            <ListItem path={"/#"} activation={true}>Career Us</ListItem>
                            <ListItem path={"/#"} activation={true}>Contact Us</ListItem>
                            <ListItem path={"/#"} activation={true}>Feedback</ListItem>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-semibold mb-4">Legal</h4>
                        <ul className="space-y-2">
                            <ListItem path={"/#"} activation={true}>Terms</ListItem>
                            <ListItem path={"/#"} activation={true}>Conditions</ListItem>
                            <ListItem path={"/#"} activation={true}>Cookies</ListItem>
                            <ListItem path={"/#"} activation={true}>Copyright</ListItem>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-semibold mb-4">Follow</h4>
                        <ul className="space-y-2">
                            <ListItem path={"/#"} activation={true}>Facebook</ListItem>
                            <ListItem path={"/#"} activation={true}>Twitter</ListItem>
                            <ListItem path={"/#"} activation={true}>Instagram</ListItem>
                            <ListItem path={"/#"} activation={true}>Youtube</ListItem>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
