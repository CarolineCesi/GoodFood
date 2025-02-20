import Menu from '../Models/menu.js';

export const menuController = {
    here: async (req, res) => {
        res.send('Menu is running !');
    },
    createMenu: async (req,res) => {
        try {
            const { name, description, price, category } = req.body;
            const newMenu = new Menu({ name, description, price, category });
    
            await newMenu.save();
            res.status(201).json({ message: 'Menu ajouté', menu: newMenu });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },
    getMenus: async (req, res) => {
        try {
            const menus = await Menu.find();
            res.json(menus);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },
}