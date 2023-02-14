import './style.js'
import { Header } from './style.js'
import logo from '../../assets/logosemfundo.png'

import { AiOutlineSearch, AiOutlineStar, AiOutlineShoppingCart } from 'react-icons/ai'
import { CgProfile } from 'react-icons/cg'

import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
function FashionMen() {
    const [age, setAge] = React.useState('');

    const handleChange = (event: SelectChangeEvent) => {
        setAge(event.target.value);
    };
    return (
        <>
            <Header>
                <img src={logo} alt="logo" className="logo" />
                <ul className='nav'>
                    <li>
                        <FormControl variant="standard" sx={{ m: 1, minWidth: 90 }} >
                            <InputLabel id="demo-simple-select-standard-label">Product</InputLabel>
                            <Select
                                labelId="demo-simple-select-standard-label"
                                id="demo-simple-select-standard"
                                value={age}
                                onChange={handleChange}
                                label="Age"
                            >
                                <MenuItem value="" >
                                    <em>None</em>
                                </MenuItem>
                                <MenuItem value={10}>Ten</MenuItem>
                                <MenuItem value={20}>Twenty</MenuItem>
                                <MenuItem value={30}>Thirty</MenuItem>
                            </Select>
                        </FormControl>
                    </li>
                    <li>
                        <FormControl variant="standard" sx={{ m: 1, minWidth: 90 }}>
                            <InputLabel id="demo-simple-select-standard-label">Shop</InputLabel>
                            <Select
                                labelId="demo-simple-select-standard-label"
                                id="demo-simple-select-standard"
                                value={age}
                                onChange={handleChange}
                                label="Age"
                            >
                                <MenuItem value="">
                                    <em>None</em>
                                </MenuItem>
                                <MenuItem value={10}>Ten</MenuItem>
                                <MenuItem value={20}>Twenty</MenuItem>
                                <MenuItem value={30}>Thirty</MenuItem>
                            </Select>
                        </FormControl>
                    </li>
                    <li>
                        <FormControl variant="standard" sx={{ m: 1, minWidth: 90 }}>
                            <InputLabel id="demo-simple-select-standard-label">Collection</InputLabel>
                            <Select
                                labelId="demo-simple-select-standard-label"
                                id="demo-simple-select-standard"
                                value={age}
                                onChange={handleChange}
                                label="Age"
                            >
                                <MenuItem value="">
                                    <em>None</em>
                                </MenuItem>
                                <MenuItem value={10}>Ten</MenuItem>
                                <MenuItem value={20}>Twenty</MenuItem>
                                <MenuItem value={30}>Thirty</MenuItem>
                            </Select>
                        </FormControl>
                    </li>
                    <li>
                        <FormControl variant="standard" sx={{ m: 1, minWidth: 90 }}>
                            <InputLabel id="demo-simple-select-standard-label">About us</InputLabel>
                            <Select
                                labelId="demo-simple-select-standard-label"
                                id="demo-simple-select-standard"
                                value={age}
                                onChange={handleChange}
                                label="Age"
                            >
                                <MenuItem value="">
                                    <em>None</em>
                                </MenuItem>
                                <MenuItem value={10}>Ten</MenuItem>
                                <MenuItem value={20}>Twenty</MenuItem>
                                <MenuItem value={30}>Thirty</MenuItem>
                            </Select>
                        </FormControl>
                    </li>
                    <li>
                        <FormControl variant="standard" sx={{ m: 1, minWidth: 90 }}>
                            <InputLabel id="demo-simple-select-standard-label">Contact</InputLabel>
                            <Select
                                labelId="demo-simple-select-standard-label"
                                id="demo-simple-select-standard"
                                value={age}
                                onChange={handleChange}
                                label="Age"
                            >
                                <MenuItem value="">
                                    <em>None</em>
                                </MenuItem>
                                <MenuItem value={10}>Ten</MenuItem>
                                <MenuItem value={20}>Twenty</MenuItem>
                                <MenuItem value={30}>Thirty</MenuItem>
                            </Select>
                        </FormControl>
                    </li>
                </ul>
                <div className='barVertical'>.</div>
                <ul className='nav2'>
                    <li className='iconsHeader2'><AiOutlineSearch /></li>
                    <li className='iconsHeader2'><AiOutlineStar /></li>
                    <li className='iconsHeader2'><CgProfile /></li>
                    <li className='iconsHeader2'><AiOutlineShoppingCart /></li>
                </ul>
            </Header>
            <div>

            </div>
        </>
    )
}
export default FashionMen;