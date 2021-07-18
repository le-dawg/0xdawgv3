import React from 'react';
import _ from 'lodash';
import Calendly from './Calendly';
import {markdownify} from '../utils';
import CtaButtons from './CtaButtons';

export default class SectionHero extends React.Component {
    render() {
        let section = _.get(this.props, 'section', null);
        return (
            <section id={_.get(section, 'section_id', null)} className="block block-hero outer">
              <div className="inner">
                {_.get(section, 'title', null) && (
                <div className="block-header inner-sm">
                  <h1 className="block-title">{_.get(section, 'title', null)}</h1>
                </div>
                )}
                {_.get(section, 'content', null) && (
                <div className="block-content inner-sm">
                  {markdownify(_.get(section, 'content', null))}
                </div>
                )}
                {_.get(section, 'actions', null) && (
                <div className="block-buttons inner-sm">
                  <CtaButtons {...this.props} actions={_.get(section, 'actions', null)} />
                </div>
                )}
              </div>
              <div>
                <div id="schedule_form">
                    <div 
                        className="calendly-inline-widget"
                        data-url="https://calendly.com/dawg"
                        style={{ minWidth: '320px', height: '580px' }} />
                    </div>
                </div>
            </section>
        );
    }
}
