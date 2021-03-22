// chain for assertions
// mocha to organizes tests

const Color = artifacts.require('./Color.sol')

require('chai')
  .use(require('chai-as-promised'))
  .should()

  contract('Color', (accounts ) => {
    describe('deployment', async() => {
      it('desploys successfully', async () => {

      })
    } )
  })
