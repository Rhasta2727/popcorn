// Import the necessary modules.
// @flow
/* eslint-disable no-unused-expressions */
import { expect } from 'chai'

import IHelper from '../../../src/scraper/helpers/IHelper'

/** @test {IHelper} */
describe('IHelper', () => {
  /**
   * The IHelper object to be tested.
   * @type {IHelper}
   */
  let iHelper: IHelper

  /**
   * Hook for setting up the IHelper tests.
   * @type {Function}
   */
  before(() => {
    iHelper = new IHelper()
  })

  /** @test {IHelper#getTraktInfo} */
  it('should throw an error when calling the getTrakt method', () => {
    expect(iHelper.getTraktInfo).to
      .throw('Using default method: \'getTraktInfo\'')
  })

  /** @test {IHelper#checkImages} */
  it('should throw an error when calling the checkImages method', () => {
    expect(iHelper.checkImages).to
      .throw('Using default method: \'checkImages\'')
  })

  /** @test {IHelper#getImages} */
  it('should throw an error when calling the getImages method', () => {
    expect(iHelper.getImages.bind({}, {})).to
      .throw('Using default method: \'getImages\'')
  })
})
