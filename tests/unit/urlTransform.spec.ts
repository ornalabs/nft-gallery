import transform from '@/utils/urlTransformer'
import { expect } from 'chai'

describe('URL TRANSFORMER TEST', (): void => {
  describe('For Singular', (): void => {

    it('can correctly transform profile', () => {
      const profile = 'https://singular.rmrk.app/space/JHMAL5CyvxWc3Ud42QxRUTpSnUa4m56mRSzPK69d1TU8NG7'
      const transformed = transform(profile)
      expect(transformed).to.equal('/rmrk/u/JHMAL5CyvxWc3Ud42QxRUTpSnUa4m56mRSzPK69d1TU8NG7')
    })

    it('can correctly transform nft', () => {
      const nft = 'https://singular.rmrk.app/collectibles/10249854-FC77C33AB229A2056A-BTFLSUZANN-BEAUTIFUL_SUZANNE_13-0000000000000013'
      const transformed = transform(nft)
      expect(transformed).to.equal('/rmrk/detail/10249854-FC77C33AB229A2056A-BTFLSUZANN-BEAUTIFUL_SUZANNE_13-0000000000000013')
    })

    it('can correctly transform collection', () => {
      const collection = 'https://singular.rmrk.app/collections/FC77C33AB229A2056A-BTFLSUZANN'
      const transformed = transform(collection)
      expect(transformed).to.equal('/rmrk/collection/FC77C33AB229A2056A-BTFLSUZANN')
    })
  })


})
