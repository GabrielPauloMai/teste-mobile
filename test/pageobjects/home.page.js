import { $ } from '@wdio/globals'


class HomePage {

    async openMenu(menu) {
        await $(`id:tab-${menu}`).click();
    }

    async openCart() {
        await $('id:cart').click();
    }
   
}

export default new HomePage();
