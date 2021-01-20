const { Router } = require('express')
const router = Router()
const passport = require('passport')
const upload = require('../middleware/upload')

const storeController = require('../controllers/store.controller')

const authController = require('../controllers/auth.controller')
const typesController = require('../controllers/types.controller')
const manufController = require('../controllers/manufactured.controller')
const galleryController = require('../controllers/gallery.controller')


router.post('/admin/auth', authController.auth)

router.get('/admin/gallery', passport.authenticate('jwt', {session: false}), galleryController.getAll)
router.post('/admin/gallery', passport.authenticate('jwt', {session: false}), upload.single('imageUrl'), galleryController.create)
router.delete('/admin/gallery', passport.authenticate('jwt', {session: false}), galleryController.delete)

router.post('/admin/types', passport.authenticate('jwt', {session: false}), typesController.create)
router.delete('/admin/types', passport.authenticate('jwt', {session: false}), typesController.delete)
router.patch('/admin/types', passport.authenticate('jwt', {session: false}), typesController.update)

router.post('/admin/manufactured', passport.authenticate('jwt', {session: false}), manufController.create)
router.delete('/admin/manufactured', passport.authenticate('jwt', {session: false}), manufController.delete)
router.patch('/admin/manufactured', passport.authenticate('jwt', {session: false}), manufController.update)

router.post('/admin/products', passport.authenticate('jwt', {session: false}), upload.single('imageUrl'), storeController.create)
router.patch('/admin/products', passport.authenticate('jwt', {session: false}), upload.single('imageUrl'), storeController.update)
router.delete('/admin/products', passport.authenticate('jwt', {session: false}), storeController.delete)

router.post('/store', storeController.getByParams)

module.exports = router