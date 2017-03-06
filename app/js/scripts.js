(function($) {
    'use strict';

    var project = {};

    project.init = function() {
        project.boxAnimate();
    };

    project.boxAnimate = function() {
        $('.box:first-child').data('position', 'left');
        $('.box:last-child').data('position', 'right');
        $('.box-link').data('status', false);

        var _this = this;

        $('.box').on('click', function() {
            var $this = $(this),
                $sibling = $this.siblings().not($this),
                $parent = $this.closest('.box-link');

            if (window.innerWidth > 991 && !$parent.data('status')) {
                $parent.css('height', $parent.height());
                $parent.data('status', true);

                _this.boxChangePosition($this, $sibling, $parent, $this.data('position'));
            }
        });
    };

    project.boxChangePosition = function($this, $sibling, $parent, _position) {
        var $left = '',
            $right = '';

        if (_position === 'left') {
            $left = $this;
            $right = $sibling;
        } else if (_position === 'right') {
            $right = $this;
            $left = $sibling;
        }

        $left.css({
            position: 'absolute',
            width: $left.width(),
            left: '0'
        }).animate({
            left: '50%'
        }, 1000, function() {
            $left.css({
                float: 'right',
                position: '',
                left: '',
                width: ''
            });
            $left.data("position", 'right');
        });

        $right.css({
            position: 'absolute',
            width: $right.width(),
            right: '0'
        }).animate({
            right: '50%'
        }, 1000, function() {
            $right.css({
                float: 'left',
                position: '',
                right: '',
                width: ''
            });
            $right.data("position", 'left');
            $parent.css('height', '');
            $parent.data('status', false);
        });
    };

    $(document).ready(project.init);
})(jQuery);
