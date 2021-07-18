import './index.css'
import {Component} from 'react'
import FaqItem from '../FaqItem'

class Faqs extends Component {
  render() {
    const {faqsList} = this.props
    return (
      <div className="bg-container">
        <div className="cards-container">
          <h1 className="faqs-title">FAQs</h1>
          {faqsList.map(item => (
            <FaqItem key={item.id} faqItem={item} />
          ))}
        </div>
      </div>
    )
  }
}

export default Faqs
