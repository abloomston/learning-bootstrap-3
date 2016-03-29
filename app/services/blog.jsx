import _ from 'lodash';
import moment from 'moment';

function simulateGetPosts(lastIndex, firstIndex) {
    firstIndex = Math.max(1, firstIndex);
    return Promise.resolve(_.times(lastIndex - firstIndex + 1, (index) => (
        {
            key: lastIndex - index,
            title: `Post #${lastIndex - index}`,
            author_link: "#",
            author_name: "Infinite Skills",
            date: moment().subtract(firstIndex + index, 'hours').format('MMMM Do YYYY, h:mm:ss a'),
            image: require(`../images/blog${((lastIndex - index) % 3) + 1}.jpg`),/* TODO */
            summary: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec hendrerit tempor tellus. Donec pretium posuere tellus. Proin quam nisl, tincidunt et, mattis eget, convallis nec, purus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nulla posuere. Donec vitae dolor. Nullam tristique diam non turpis. Cras placerat accumsan nulla. Nullam rutrum. Nam vestibulum accumsan nisl.",
            full_link: "#"
        }
    )));
}

function simulateTotalPosts() {
    return Promise.resolve(17);
}

module.exports = {
    getPosts: simulateGetPosts,
    getPostsTotalCount: simulateTotalPosts
};
